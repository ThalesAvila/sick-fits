import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h1>I'm in the Page component</h1>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
