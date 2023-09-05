const LoadingPage = () => {
  return (
    <>
      <div className="w-full h-screen flex absolute bg-slate-400 items-center justify-center">
        <div className="loading-container">
        <span className="animate  h-30  px-4 py-9 rounded-full">
        </span>
        <span className="animate-two  h-30  px-4 py-9 rounded-full">
        </span>
        <span className="circle  h-30  px-4 py-9 rounded-full">
        </span>
        <span className="circle-one  h-30  px-4 py-9 rounded-full">
        </span>
        <span className="circle-two  h-30  px-4 py-9 rounded-full">
        </span>
        <div className="flex flex-col justify-center text items-center">
        <p className="text-sm font-medium text-white  " >Loading</p>
        <span className="text-sm font-medium text-white">Wait a minute</span>
        </div>

        <span></span>
        <span></span>

        </div>
      </div>
    </>
  );
};

export default LoadingPage;
