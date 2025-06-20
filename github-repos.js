// github-repos.js
fetch('https://api.github.com/users/Saikrishna-Paila/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data from GitHub');
        }
        return response.json();
    })
    .then(repos => {
        // Sort repositories by creation date in descending order
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        
        // Map and join repositories into list items
        const repoList = repos
            .map(repo => `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
            .join('');
        
        // Update the DOM with the repository list
        document.getElementById('github-repos').innerHTML = `<ul>${repoList}</ul>`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('github-repos').innerHTML = 'Failed to load repositories.';
    });
