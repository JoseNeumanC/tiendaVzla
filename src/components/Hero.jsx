export const Hero = ({children}) => {
  return (
    <div className="hero mb-5">
      <div className="container">
        <div className="position-relative d-flex justify-content-center">
          <h2>{children}</h2>
          <span className="borders bg-primary"></span>
        </div>
      </div>
    </div>
  );
};
