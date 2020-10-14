import React from 'react';
import Header from './components/Header.js'
// import BlogPost from './components/BlogPost.js'
// import blogData from './data/blog.js'
// import ProjectButton from './components/ProjectButton.js'
// import projectsData from './data/projects.js'
// import LinkButton from './components/LinkButton.js'
// import linksData from './data/links.js'
import Article from './components/Article.js'
import aboutData from './data/about.js'

class App extends React.Component {
    constructor() {
        super();
        this.pages = ['blog', 'projects', 'links', 'about'];
        this.state = {
            currentPage: 0,
        };
        this.setPage = this.setPage.bind(this);
    }

    // function to change page on navbar button clicks
    setPage(pageNum) {
        this.setState({ currentPage: pageNum })
    }

    render() {
        return (
            <Header pages={this.pages} currentPage={this.state.currentPage} setPage={this.setPage}/>
        // main:
        //    <div class=container>
        //      <div id='parent_row' class='row'>
        //         switch (this.pages[this.state.currentPage])
        //          case blog:
        //             for each object in blog.js:
        //               <BlogPost {object} />
        //          case projects:
        //             for each object in projects.js:
        //                <ProjectButton {object} />
        //          case links:
        //             for each object in links.js:
        //                <LinkButton {object} />
        //          case about:
        //                <Article {about.js} />
        //      </div>
        //    </div>
        )
    }
}

export default App;