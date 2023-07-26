'use client';

export const FloatingNavbar = ({ data }) => {
  return (
    <div>
      <div className=" mx-4 my-6 flex h-[50px] items-center justify-between rounded-md bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 px-4 py-1 shadow-lg">
        {/* title */}
        <span className=" font-fun text-2xl text-white">{data.name}</span>
        {/* button */}
        <div className=" inline rounded-md bg-white px-2 py-1">
          <a
            href="https://twitter.com/4real_Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className=" cursor-pointer font-mono text-base font-light">
              my twitter!
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
