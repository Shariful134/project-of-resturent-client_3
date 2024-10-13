import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <div className="mb-12">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero  h-[500px]">
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="px-20 py-16  bg-slate-900 bg-opacity-40">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5 max-w-2xl ">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
