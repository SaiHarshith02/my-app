import React from 'react'

export default function About(props) {
    let mystyle={
        color:props.mode==="light"?"black":"white",
        backgroundColor:props.mode==="light"?"white":"black"
    }
  return (
    <>
    <div className='my-3'> 
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>1. Free to Use</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show"style={mystyle} data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
       Our TextUtils application is completely free for everyone. There are no hidden charges or premium features locked behind paywalls. Whether you need to perform quick text transformations, count characters, or analyze content, all features are available at no cost. Enjoy unlimited access and transform your text efficiently without any financial burden!
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>2. Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body"style={mystyle}>
       TextUtils is designed to work seamlessly across all modern web browsers, ensuring a smooth experience no matter what platform you're using. Be it Chrome, Firefox, Safari, or Edge, our application functions flawlessly without requiring any special plugins or installations. Your productivity won't be hampered by browser limitations, allowing you to focus on what truly matters.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>3. Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body "style={mystyle}>
       Dive deep into your content with our powerful text analysis tools. TextUtils provides comprehensive insights, including word count, character count, and reading time. These features help you understand the complexity and structure of your text, making it easier to optimize your content for clarity and engagement. Whether you're writing an essay, creating a blog post, or preparing a presentation, our analysis tools ensure your text is top-notch.
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
