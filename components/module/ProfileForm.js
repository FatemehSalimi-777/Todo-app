function ProfileForm({
  name,
  setName,
  lastName,
  setLastName,
  password,
  setPassword,
  submitHandler,
}) {
  return (
    <>
      <div className="profile-form__input">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.valueAsDate)}
          />
        </div>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
}

export default ProfileForm;
