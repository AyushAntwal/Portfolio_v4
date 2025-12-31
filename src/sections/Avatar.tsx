import memoji from "../assets/memji-smile.png";
export default function Avatar() {
  return (
    <a href="#" className="group block mb-5 shrink-0">
      <div className="flex items-center">
        <div>
          <img
            alt=""
            src={memoji}
            className="inline-block size-12 aspect-square lg:size-20 rounded-full bg-white/5 outline -outline-offset-2 outline-white/10"
          />
        </div>
        <div className="ml-4">
          <p className="text-lg/4 font-semibold text-white">
            Hi, I'm Ayush Antiwal
          </p>
          <p className="text-sm font-medium mt-1 text-gray-400">
            Frontend Developer
          </p>
        </div>
      </div>
    </a>
  );
}
