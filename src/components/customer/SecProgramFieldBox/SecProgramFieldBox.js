
const SecProgramFieldBox = ({
  name,
  variant = "default",
  children,
}) => {
  const displayName = variant === 'default'

  return (
    <div className="p-d-flex p-jc-between p-text-light">
      {displayName && <span className="p-pr-2">{name}</span>}
      {children}
    </div>
  );
};


export default SecProgramFieldBox