const skill_holder = document.getElementById('skills');

const yourskills = ['UI Design', 'DevOps', 'Network'];

const primaryskills = yourskills.filter(skill => {
    return skill !== "DevOps";
});

skill_holder.innerHTML = primaryskills
console.log(primaryskills);