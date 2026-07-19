import useReveal from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

const VIDEO_URL = "https://www.youtube.com/embed/4w_SSRtCdUw?rel=0";

const VideoShowcase = () => {
  const scope = useReveal();

  return (
    <section ref={scope} className="py-24 lg:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See It In Action"
          title="Let us show you how simple church management can be"
          subtitle="Watch a quick overview of the platform — from member profiles to online giving — in under three minutes."
        />

        <div data-reveal className="relative">
          <div className="relative bg-white rounded-[2rem] border border-slate-200 shadow-lift overflow-hidden">
            <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-slate-100 bg-slate-50/80">
              <span className="w-3 h-3 rounded-full bg-[#f87171]" />
              <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
              <span className="w-3 h-3 rounded-full bg-[#34d399]" />
              <span className="mx-auto px-8 py-1 rounded-md bg-white border border-slate-100 text-[11px] font-medium text-slate-400">
                ekklesiasone.com/tour
              </span>
            </div>

            <div className="relative aspect-video bg-ink">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={VIDEO_URL}
                title="EkklésiasOne product tour video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
