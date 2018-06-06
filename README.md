Playing around with bootstrap

App.js is the file where I bind all the components into one page

Slogan:
At Decathlon, we all share a common passion for Sport.
We love what we do, and who we do it with.
Discover who we are!

PROBLEMS ENCOUNTERED:
Figuring how to loop images through an array

Processes:
Added id in MainArea.js inside this.state (Our initial state for class)

We have added a removePerson(id) function to filter them through id ( for experimenting PeopleCard component)

then we want to render the removePerson function inside the PeopleModal.js

Currently, PeopleCard can display name and sportleader. SO can PeopleModal, because we are just passing props from parent to children.
We have { id, name, sportleader, description } in our constructor of MainArea.js (parent) when we set our initial state

so to pass the props from MainAreas.js to other components (children), before rendering function, we need to let { id, name, sportleader, description } = this.props.person;
we can then start using the properties inherit frmo the parent. Example:
{this.props.person.id}
{this.props.person.name}
{this.props.person.sportleader}
{this.props.person.description}

so now my next step is.....

1.  put images link inside MainArea.js
    similar to { id, name, sportleader, description } , I will pass them as props from parent to child component

2.  maybe refactor the code and then iterate the array of images ???

3.  then put those image links/ files inside database (preferably MongoDB/firebase) because if we load all the images in the local folde, it will worsen the web performance.

Reference:
https://www.youtube.com/watch?v=8q2zf9pFiQ4&t=7s
https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/
