import "./style.css";
const commentTemplate = document.createElement("template");
commentTemplate.innerHTML = `

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
  <textarea id="comment" name="comment" placeholder="This is my feedback"></textarea><br><br>
    <input type="submit" value="Submit" id="button">
  </form>
    </div>
</div>
`;

class Comment extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(commentTemplate.content);
  }

}


customElements.define("comment-component", Comment);


