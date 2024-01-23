const User = ({ user }) => {
  return (
    <li>
      {user.name} - {user.email}
    </li>
  );
};

export { User };
