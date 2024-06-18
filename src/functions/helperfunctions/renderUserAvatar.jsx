export const renderUserAvatar = (
  props,
  currentUserId,
  userProfileImage,
  userName
) => {
  if (props.user.id === currentUserId) {
    return userProfileImage ? (
      <img
        src={userProfileImage}
        className="w-10 h-10 rounded-full object-cover"
        alt="User profile"
      />
    ) : (
      <h1 className="w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold bg-pakistangreen">
        {userName.charAt(0)}
      </h1>
    );
  } else if (props.user.id !== currentUserId) {
    return props.user.userImage ? (
      <img
        src={props.user.userImage}
        className="w-10 h-10 rounded-full object-cover"
        alt="User profile"
      />
    ) : (
      <h1 className="w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold bg-pakistangreen">
        {props.user.name.charAt(0)}
      </h1>
    );
  }
};
