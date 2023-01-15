export const ProductTile = ({ img, name }: { img: string; name: string }) => (
  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary">
    <img
      alt="..."
      src={img}
      className="w-full align-middle rounded-t-lg p-4 bg-white"
    />
    <blockquote className="relative p-8 mb-4">
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 583 95"
        className="absolute left-0 w-full block h-95-px -top-94-px"
      >
        <polygon
          points="-30,95 583,95 583,65"
          className="text-primary fill-current"
        ></polygon>
      </svg>
      <h4 className="text-2xl font-bold text-fill-white text-stroke text-stroke-secondary">
        {name}
      </h4>
    </blockquote>
  </div>
);
