import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

function LinkNavigation() {
  return (
    <nav>
      <h2>LINKS AND NAVIGATION</h2>
      <ul>
        <li>
          <FaGithub />{" "}
          <a href="https://github.com/KingHash23" target="_blank" rel="noopener noreferrer">
            My GitHub Profile
          </a>
        </li>
        <li>
          <FaLinkedin />{" "}
          <a href="https://www.linkedin.com/in/obba-mark-calvin-b70000250/" target="_blank" rel="noopener noreferrer">
            My LinkedIn Profile
          </a>
        </li>
        <li>
          <FaYoutube />{" "}
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            My YouTube Channel
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LinkNavigation;
