export const Link = () => {
  const handleCLick = () => {
    console.log('link');
  };
  return <div onClick={handleCLick}>link</div>;
};
