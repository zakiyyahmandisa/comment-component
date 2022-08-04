import "./style.css";
const templateTwo = document.createElement("template");
templateTwo.innerHTML = `

<style>
    .comment{
        text-align: center;
        background-color: white;

        border: 1px solid #bacdd8;
      
        padding: 4px;
      
        border-radius: 12px;
        height: 15vh;
  width: 15rem;
    }
    
</style>

<div>
    <div class="comment">
    <form>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" placeholder="John Doe"><br>
    <label for="email">Email</label><br>
    <input type="email" id="email" name="email" placeholder="johndoe@email.com"><br>
    <label for="email">Comment</label><br>
  <textarea id="comment" name="comment" placeholder="This is my feedback"></textarea><br>
  <input type="checkbox" id="captcha" name="captcha">
  <label for="checkbox"> I am not a robot</label><br><br>
    <input type="submit" value="Submit" id="button">
  </form>
    </div>
</div>
`;

class CommentTwo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateTwo.content);
  }

}


customElements.define("comment2-component", CommentTwo);

