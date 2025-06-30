import "../styles/StarBorder.css"; // Adjust the path as necessary

const StarBorder = ({
  as: Component = "div", // use div instead of button
  className = "",
  color = "rgba(255, 255, 255, 0.7)",
  speed = "6s",
  thickness = 0,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className="border-ring"
        style={{
          borderColor: color,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
