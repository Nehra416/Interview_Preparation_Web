import React from 'react'
import { Nav_bar } from '../Navbar/Nav_bar'
import { Footer } from '../Footer/Footer'
import { Side_bar } from '../Side_bar/Side_bar'
import { Content } from '../Content/Content'

export const Html_layout = () => {
  // const html = [
  //   {
  //     Q: "What is the purpose of the <!DOCTYPE> declaration in HTML?",
  //     ans: "<!DOCTYPE> declaration specifies the HTML version and ensures that the browser renders the page in standards mode. It is the first line in an HTML document and helps the browser to interpret the HTML and CSS correctly, promoting consistent rendering across different browsers."
  //   },
  //   {
  //     Q: "What is the difference between HTML and XHTML?",
  //     ans: "HTML (HyperText Markup Language) is a markup language used to create web pages, while XHTML (Extensible HyperText Markup Language) is a stricter variant of HTML that follows XML rules. XHTML requires well-formed markup, proper nesting of elements, and closing of all tags, making it more rigid and predictable compared to HTML."
  //   },
  //   {
  //     Q: "What are semantic HTML elements and why are they important?",
  //     ans: "Semantic HTML elements convey meaning about the structure and content of a page, such as <header>, <footer>, <article>, and <section>. They improve accessibility, SEO, and code readability by clearly defining the purpose of different parts of the document, which helps both browsers and developers understand the content better."
  //   },
  //   {
  //     Q: "What is the purpose of the alt attribute in the <img> tag?",
  //     ans: "alt attribute provides alternative text for an image when it cannot be displayed. It improves accessibility for screen readers used by visually impaired users and helps with SEO. The alt text describes the content or function of the image, ensuring that the information is conveyed even if the image fails to load."
  //   },
  //   {
  //     Q: "What is the meta tag used for in HTML?",
  //     ans: "meta tags provide metadata about the HTML document, such as character encoding, author, description, and viewport settings. They are placed within the <head> element and help with SEO, browser compatibility, and responsive design. For example, <meta charset='UTF- 8'> specifies the character encoding of the document."
  //   },
  //   {
  //     Q: "What is the difference between <div> and <span> elements?",
  //     ans: "<div> is a block-level element used to group and style larger sections of content, while <span> is an inline element used for smaller portions of text or inline styling. <div> typically creates a new block on the page, whereas <span> does not affect the flow of content but allows for inline styling."
  //   },
  //   {
  //     Q: "How do you create a hyperlink in HTML?",
  //     ans: "To create a hyperlink, use the <a> (anchor) tag with the href attribute specifying the URL or path. For example: <a href='https://example.com'>Visit Example</a>. This creates a clickable link that directs users to the specified destination when clicked."
  //   },
  //   {
  //     Q: "What is the purpose of the form tag in HTML?",
  //     ans: "<form> tag is used to create a form that collects user input and submits it to a server. It contains various form controls like <input>, <select>, and <textarea>. The action attribute specifies the URL to which the form data is sent, and the method attribute specifies the HTTP method (e.g., GET or POST)."
  //   },
  //   {
  //     Q: "What is the purpose of the iframe tag in HTML?",
  //     ans: "<iframe> tag embeds another HTML document within the current page. It is used to include external content like videos, maps, or other web pages. The src attribute specifies the URL of the document to display, and the width and height attributes define the size of the iframe."
  //   },
  //   {
  //     Q: "How do you include CSS styles in an HTML document?",
  //     ans: "CSS styles can be included in an HTML document using three methods: inline styles with the style attribute on individual elements, internal styles within a <style> tag inside the <head> section, and external stylesheets linked with the <link> tag. External stylesheets are preferred for maintaining separation of concerns and easier management."
  //   },
  //   {
  //     Q: "What is the difference between the id and class attributes in HTML?",
  //     ans: "id is a unique identifier assigned to a single HTML element, allowing for specific styling or JavaScript manipulation. class can be assigned to multiple elements, allowing for grouping and applying the same styles or scripts to those elements. An id must be unique within a page, while multiple elements can share the same class."
  //   },
  //   {
  //     Q: "What is the label tag used for in HTML forms?",
  //     ans: "<label> tag is used to associate a text description with a form control, such as an <input> element. It improves accessibility by allowing screen readers to correctly identify the purpose of the form control. The for attribute of the <label> tag should match the id of the associated form control."
  //   },
  //   {
  //     Q: "What are HTML entities and why are they used?",
  //     ans: "HTML entities are special codes used to represent characters that have a reserved meaning in HTML or are not easily typed on a keyboard. For example, &lt; represents <, and &amp; represents &. They are used to ensure that characters are displayed correctly and do not interfere with HTML syntax."
  //   },
  //   {
  //     Q: "How do you include a JavaScript file in an HTML document?",
  //     ans: "To include a JavaScript file, use the<script> tag with the src attribute pointing to the URL of the JavaScript file."
  //   },
  //   {
  //     Q: "What are HTML5 semantic elements and why are they important?",
  //     ans: "HTML5 semantic elements include tags like <header>, <footer>, <main>, and <nav>. They provide meaning to the structure of a web page, improving accessibility and SEO. These elements describe the role of the content they enclose, helping search engines and assistive technologies understand the document better."
  //   },
  //   {
  //     Q: "What is the placeholder attribute used for in form elements?",
  //     ans: "placeholder attribute provides a hint or a short description of the expected input in form fields like <input> and <textarea>. It displays a temporary text within the input field that disappears when the user starts typing, guiding them on what information should be entered."
  //   },
  //   {
  //     Q: "What is the title attribute used for in HTML?",
  //     ans: "title attribute provides additional information about an element when the user hovers over it with a mouse. It can be added to various HTML elements and typically displays a tooltip with the specified text, offering context or extra details about the element."
  //   },
  //   {
  //     Q: "What is the difference between the GET and POST methods in HTML forms?",
  //     ans: "GET method appends form data to the URL, making it visible in the browser's address bar and suitable for non-sensitive data. POST method sends form data in the request body, keeping it hidden from the URL and suitable for submitting sensitive or larger amounts of data."
  //   },
  //   {
  //     Q: "How do you create a multi-line text input in HTML?",
  //     ans: "To create a multi-line text input, use the <textarea> tag. Unlike <input>, which is designed for single-line input, <textarea> allows users to enter text over multiple lines. You can specify the size using the rows and cols attributes or through CSS."
  //   },
  //   {
  //     Q: "What is the purpose of the required attribute in HTML forms?",
  //     ans: "required attribute makes a form field mandatory, meaning the form cannot be submitted unless the field is filled out. It provides client-side validation to ensure that users provide necessary information before submission."
  //   },
  //   {
  //     Q: "What is the difference between input type='text' and input type='password'?",
  //     ans: "input type='text' creates a standard text input field where the entered text is visible. input type='password' creates a field where the entered text is obscured with asterisks or dots, making it suitable for sensitive information like passwords."
  //   },
  //   {
  //     Q: "How do you create a hyperlink that opens in a new tab?",
  //     ans: "To create a hyperlink that opens in a new tab, use the target='_blank' attribute in the<a> tag."
  //   },
  //   {
  //     Q: "What is the action attribute used for in a <form> element?",
  //     ans: "action attribute specifies the URL to which the form data should be sent when the form is submitted. It tells the browser where to send the data for processing. If omitted, the form data is sent to the same URL as the page containing the form."
  //   },
  //   {
  //     Q: "How do you embed a YouTube video in an HTML page?",
  //     ans: "To embed a YouTube video, use the<iframe> tag with the src attribute pointing to the video URL."
  //   },
  //   {
  //     Q: "How do you specify a default value for an HTML input field?",
  //     ans: "To specify a default value for an < input > field, use the value attribute."
  //   },
  //   {
  //     Q: "What is the type attribute in the <input> tag?",
  //     ans: "type attribute defines the type of input control to be displayed. It determines the kind of data the input field accepts and affects its appearance. Common values include text, password, email, number, checkbox, radio, and submit."
  //   },
  //   {
  //     Q: "What is the purpose of the disabled attribute in HTML forms?",
  //     ans: "disabled attribute disables an HTML form element, making it unresponsive to user interaction and excluding it from form submissions. It is used to prevent user input in specific fields or controls."
  //   },
  //   {
  //     Q: "How can you embed a video into an HTML page?",
  //     ans: "To embed a video, use the <video> tag with a src attribute pointing to the video file. You can also provide multiple sources using the <source> tag and include controls for playback."
  //   },
  //   {
  //     Q: "What is the name attribute in HTML forms used for?",
  //     ans: "name attribute specifies the name of an HTML form element, which is used to reference the data when submitting the form. It identifies the field’s data in the server-side script or in client-side JavaScript."
  //   },
  //   {
  //     Q: "How do you create a form with a file upload option?",
  //     ans: "To create a file upload option, use the <input> tag with type='file'."
  //   },
  // ]

  return (
    <div>
      <Nav_bar />
      <div className='flex'>
        <Side_bar />
        <Content />
      </div>
      <Footer />
    </div>
  )
}
