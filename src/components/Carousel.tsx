import Registry from "@/components/weddding/Registry";
import SharePhotos from "@/components/weddding/SharePhotos";

export default function Carousel() {
  return (
    <div className="rounded-xl rounded bg-white relative text-center p-4 flex-col lg:w-1/2 w-10/12">
      <div className="mb-6">
        <img
          src="/couple_2.jpeg"
          alt={"photo"}
          className="rounded-lg grayscale drop-shadow-2xl h-96 w-full object-cover"
        />
        <div className="mt-8">
          <h2 className="mb-4 font-bold text-xl text-slate-900">
            Alvin and Joy&rsquo;s Wedding
          </h2>

          <p className="mb-6 px-4 text-slate-800">Thanks</p>

          <div className="gap-4 flex flex-col">
            <div>
              <SharePhotos />
            </div>
            <div>
              <Registry />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
