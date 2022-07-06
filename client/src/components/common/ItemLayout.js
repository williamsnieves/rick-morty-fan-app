const ItemLayout = ({ className, children, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default ItemLayout;
