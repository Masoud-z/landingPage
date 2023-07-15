import Image from "next/image";

function Attribute({ img, title, description }) {
  return (
    <section className="flex flex-col justify-start items-start gap-5 text-teal-900">
      <Image
        src={img}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h2 className="font-semibold text-lg uppercase">{title}</h2>
      <p className="font-normal text-sm w-3/4">{description}</p>
    </section>
  );
}

export default Attribute;
