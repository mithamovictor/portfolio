const Image = (props) => {
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      loading={props.loading ? "lazy" : ""}
    />
  );
};

export default Image;
