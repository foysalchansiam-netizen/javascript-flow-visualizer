import { useRef } from 'react';
import QuickAccessNav from './QuickAccessNav';
import AlgorithmComplexityChart from './AlgorithmComplexityChart';
import AlgorithmQuiz from './AlgorithmQuiz';

function getInstagramEmbedUrl(embedValue) {
  if (!embedValue) {
    return null;
  }

  const permalink = embedValue.match(
    /data-instgrm-permalink\s*=\s*["']([^"']+)["']/i,
  )?.[1];

  try {
    const url = new URL((permalink || embedValue).replace(/&amp;/g, '&').trim());
    const allowedHosts = ['instagram.com', 'www.instagram.com'];
    const path = url.pathname.replace(/\/+$/, '');

    if (
      !allowedHosts.includes(url.hostname) ||
      !/^\/(?:p|reel|tv)\/[^/]+(?:\/embed)?$/i.test(path)
    ) {
      return null;
    }

    const embedPath = /\/embed$/i.test(path) ? path : `${path}/embed`;
    return `https://www.instagram.com${embedPath}/`;
  } catch {
    return null;
  }
}

export default function AlgorithmPage({ algorithm }) {
  const instagramEmbedUrl = getInstagramEmbedUrl(algorithm.instagramEmbedUrl);
  const videoFrameRef = useRef(null);

  const centerVideoOnLoad = () => {
    try {
      const frameWindow = videoFrameRef.current?.contentWindow;
      const frameDocument = videoFrameRef.current?.contentDocument;
      if (frameWindow && frameDocument) {
        const scrollHeight = Math.max(
          frameDocument.body?.scrollHeight || 0,
          frameDocument.documentElement?.scrollHeight || 0,
        );
        frameWindow.scrollTo({ top: Math.max(0, (scrollHeight - frameWindow.innerHeight) / 2) });
      }
    } catch {
      // Instagram embeds are cross-origin and may not allow parent scrolling.
    }
  };

  return (
    <div className="min-h-dvh bg-[#111512] text-[#edf1e8]">
      <QuickAccessNav activePage="algorithms" />
      <main className="grid min-h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-4rem)] lg:min-h-0 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <section className="flex min-h-[50dvh] flex-col overflow-y-auto border-b border-[#2c342d] px-6 py-6 sm:px-10 sm:py-8 lg:min-h-0 lg:border-b-0 lg:border-r lg:px-14 lg:py-10">
        <a
          href="/algorithms"
          className="fun-link inline-flex w-fit items-center gap-2 rounded-xl border border-[#39443a] px-5 py-3 font-semibold text-[#cbd5c8] transition hover:border-[#8fbe78] hover:bg-[#1c251d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a6d58e]"
        >
          <span aria-hidden="true">&larr;</span>
          All algorithms
        </a>

        <article className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center py-12 lg:py-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a6d58e]">
            {algorithm.category || 'Sorting algorithm'}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {algorithm.name}
          </h1>
          {algorithm.description && (
            <p className="mt-6 text-lg leading-relaxed text-[#b4beb2]">
              {algorithm.description}
            </p>
          )}
          {algorithm.content && (
            <div className="mt-8 whitespace-pre-line leading-relaxed text-[#d0d8ce]">
              {algorithm.content}
            </div>
          )}
          <AlgorithmComplexityChart algorithm={algorithm} />
          <AlgorithmQuiz algorithm={algorithm} />
        </article>
      </section>

      {instagramEmbedUrl ? (
        <iframe
          title={`${algorithm.name} Instagram video`}
          src={instagramEmbedUrl}
          ref={videoFrameRef}
          onLoad={centerVideoOnLoad}
          className="h-[50dvh] w-full self-center rounded-2xl border-0 bg-black lg:h-[calc(100dvh-4rem)]"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          scrolling="yes"
        />
      ) : (
        <div
          aria-label={`${algorithm.name} Instagram video`}
          className="flex min-h-[50dvh] flex-col items-center justify-center rounded-2xl border border-dashed border-[#39443a] bg-[#141915] px-8 text-center lg:min-h-0"
        >
          <span className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#a6d58e]">
            Instagram video
          </span>
          <p className="max-w-xs leading-relaxed text-[#b4beb2]">
            Add an Instagram post or reel URL in this algorithm&apos;s data
            file. You can use its URL or the full blockquote from Instagram.
          </p>
        </div>
      )}
      </main>
    </div>
  );
}
