const skill_holder = document.getElementById('skills');

const yourskills = ['UI Design', 'DevOps', 'Network'];

yourskills.push('Web Programmer')

let parent = '<ul>'

yourskills.forEach((skill) => {
    parent += '<li>' + skill + '</li>';
    console.log(`${skill}`);
});

parent += '</ul>';
skill_holder.innerHTML = parent;