export const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [user, setUser] = React.useState([]);
  const values = {
    user,
    setUser,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export default UsersContext;
