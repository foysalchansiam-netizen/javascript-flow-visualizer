import { useEffect, useRef, useState } from 'react';

const TAP_MS = 250;

export default function HoldButton({
  children = 'Hold to confirm',
  doneLabel = 'Done',
  icon = null,
  doneIcon = null,
  backgroundColor = '#f8f8f1',
  fillColor = '#788d42',
  textColor = '#596153',
  fillTextColor = '#ffffff',
  holdTime = 1200,
  resetAfter = 1000,
  disabled = false,
  onHold,
  className = '',
}) {
  const [phase, setPhase] = useState('idle');
  const buttonRef = useRef(null);
  const startRef = useRef(0);
  const pointerRef = useRef(null);
  const animationRef = useRef(0);
  const resetRef = useRef(0);

  const stop = (cancelled = false) => {
    cancelAnimationFrame(animationRef.current);
    if (cancelled && phase === 'holding') {
      setPhase('idle');
      buttonRef.current?.style.setProperty('--hold-progress', '0');
    }
    pointerRef.current = null;
  };

  const complete = () => {
    cancelAnimationFrame(animationRef.current);
    setPhase('done');
    buttonRef.current?.style.setProperty('--hold-progress', '1');
    onHold?.();
    if (resetAfter > 0) {
      clearTimeout(resetRef.current);
      resetRef.current = setTimeout(() => {
        setPhase('idle');
        buttonRef.current?.style.setProperty('--hold-progress', '0');
      }, resetAfter);
    }
  };

  const tick = now => {
    const progress = Math.min(1, (now - startRef.current) / holdTime);
    buttonRef.current?.style.setProperty('--hold-progress', progress.toFixed(4));
    if (progress >= 1) {
      complete();
      return;
    }
    animationRef.current = requestAnimationFrame(tick);
  };

  const begin = event => {
    if (disabled || phase !== 'idle' || event.button !== 0) return;
    event.preventDefault();
    pointerRef.current = event.pointerId;
    startRef.current = performance.now();
    setPhase('holding');
    event.currentTarget.setPointerCapture?.(event.pointerId);
    animationRef.current = requestAnimationFrame(tick);
  };

  const release = event => {
    if (pointerRef.current !== event.pointerId || phase !== 'holding') return;
    const heldFor = performance.now() - startRef.current;
    stop(true);
    if (heldFor < TAP_MS) {
      buttonRef.current?.style.setProperty('--hold-progress', '0');
    }
  };

  const handleKeyDown = event => {
    if ((event.key === 'Enter' || event.key === ' ') && !event.repeat) {
      event.preventDefault();
      begin({ ...event, button: 0, pointerId: 'keyboard', currentTarget: buttonRef.current });
    }
  };

  const handleKeyUp = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      release({ pointerId: 'keyboard' });
    }
  };

  useEffect(() => () => {
    cancelAnimationFrame(animationRef.current);
    clearTimeout(resetRef.current);
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`hold-button ${className}`}
      disabled={disabled}
      data-phase={phase}
      style={{
        '--hold-bg': backgroundColor,
        '--hold-fill': fillColor,
        '--hold-text': textColor,
        '--hold-fill-text': fillTextColor,
        '--hold-time': `${holdTime}ms`,
      }}
      onPointerDown={begin}
      onPointerUp={release}
      onPointerCancel={() => stop(true)}
      onPointerLeave={event => event.pointerType !== 'touch' && stop(true)}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onContextMenu={event => event.preventDefault()}
    >
      <span className="hold-button__label">
        <span className="hold-button__idle">{icon}{children}</span>
        <span className="hold-button__done">{doneIcon}{doneLabel}</span>
      </span>
      <span className="hold-button__fill" aria-hidden="true">
        <span className="hold-button__label hold-button__label--fill">
          <span className="hold-button__idle">{icon}{children}</span>
          <span className="hold-button__done">{doneIcon}{doneLabel}</span>
        </span>
      </span>
    </button>
  );
}