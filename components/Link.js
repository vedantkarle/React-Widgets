const Link = ({ to, className, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", to);

    //communicate to route component that URL has changed by creating an event

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} to={to}>
      {children}
    </a>
  );
};

export default Link;
