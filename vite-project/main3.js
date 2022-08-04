import "./style.css";
const templateThree = document.createElement("template");
templateThree.innerHTML = `

<style>
    .comment{
        text-align: center;
        background-color: white;

        border: 1px solid #bacdd8;
      
        padding: 4px;
      
        border-radius: 12px;
        height: 18vh;
  width: 15rem;
    }
    
</style>

<div>
    <div class="comment">
    <form>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" placeholder="John Doe"><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" placeholder="johndoe@email.com"><br><br>
    <label for="myfile">Upload Supporting Document:</label> 
  <input type="file" id="myfile" name="myfile"><br>
    <label for="email"> Additional Comment(s):</label><br>
  <textarea id="comment" name="comment" placeholder="This is my feedback"></textarea><br>
  <br>
    <input type="submit" value="Submit" id="button">
  </form>
    </div>
</div>
`;

class CommentThree extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateThree.content);
  }

}


customElements.define("comment3-component", CommentThree);
