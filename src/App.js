import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    coding: false,
    design: false,
    music: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setInterests((prevInterests) => ({
        ...prevInterests,
        [name]: checked,
      }));
    } else {
      if (name === 'name') {
        setName(value);
      } else if (name === 'email') {
        setEmail(value);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const selectedInterests = Object.keys(interests)
    .filter((key) => interests[key])
    .join(', ');

  return (
    <main>
      <h1>Hi, I'm [Thazar]</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              aria-label="Name"
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              aria-label="Email"
            />
          </label>
        </div>
        <fieldset>
          <legend>Interests:</legend>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.coding}
              onChange={handleChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="design"
              checked={interests.design}
              onChange={handleChange}
            />
            Design
          </label>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={interests.music}
              onChange={handleChange}
            />
            Music
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>
          Thank you, {name}! Your form has been submitted successfully.
          {selectedInterests && ` Your interests: ${selectedInterests}.`}
        </p>
      )}
    </main>
  );
}

export default App;
