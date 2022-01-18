---
title: App Screen
summary: The App Screen is the container for your digital product. 
tags: basic view, sidenav, topbar
layout: guide
eleventyNavigation:
  key: App Screen
  parent: Components
  order: 20
  excerpt: The App Screen is the container for your digital product. 
  img: /img/illustrations/illus-app-screen.svg
---

## Best Practices

- Follow the source order and structure you see here.
- Inspect this site to see a more detailed example.

## Parts

App Screen provides the basic user interface frame for all products developed using Pelican. It contains 4 core parts.

<div class="table-responsive">
  <table class="table mb-8">
    <thead>
        <tr>
          <th id="Element">Element</th>
          <th id="Element-Identifier">Element-Identifier</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <th id="App-Topbar">App-Topbar</th>
        <td headers="App-Topbar Element-Identifier"><code>&lt;div class="app-topbar"&gt;...&lt;div&gt;</code></td>
      </tr> 
      <tr>
        <th id="App-Sidebar">App-Sidebar</th>
        <td headers="App-Sidebar Element-Identifier"><code>&lt;nav class="app-sidebar"&gt;...&lt;nav&gt;</code></td>
      </tr> 
      <tr>
        <th id="App-Content">App-Content</th>
        <td headers="App-Content Element-Identifier"><code>&lt;div class="app-content"&gt;...&lt;div&gt;</code></td>
      </tr>
      <tr>
        <th id="Main-Content">Main-Content</th>
        <td headers="Main-Content Element-Identifier"><code>&lt;main id="main"&gt;...&lt;main&gt;</code></td>
      </tr>                         
    </tbody>
  </table>
</div>

## Source Order

**Start with the App-Topbar**

- The App-Topbar displays the navigational collapse button, the logo, and the current page name.

```html
<div class="app-topbar">...</div>
```

**Add the App-Sidebar**

- The App-Sidebar contains all of the first and second level navigation.
- The markup below is a short sample. Repeat portions as necessary.

```html
<nav class="app-sidebar">
  <div class="app-sidebar-body">...</div>
  <div class="app-sidebar-footer">...</div>
</nav>
```

**Continue with the App-Content**

- The App-content wraps everything else for expanding and collapsing with the App-Sidebar.

```html
<div class="app-content">...</div>
```

**Follow up with the Main-Content**

- This is where the content of the page goes.

```html
<main id="main">...</main>
```

## Putting It All Together

The source below shows the source order and structure of the page in a little more detail than above.

```html
<body>
    <div class="app-topbar">...</div>
    <nav class="app-sidebar">
        <div clas="app-sidebar-body">
            <ul class="app-sidebar-nav-list">
                <li class="app-sidebar-nav-item">
                    <a class="app-sidebar-nav-link" href="/whats-new/">What’s New</a>
                </li>
                <li class="app-sidebar-nav-item">
                    <a class="app-sidebar-nav-link" href="/introduction/">Introduction</a>
                    <button class="app-sidebar-subnav-revealer" type="button" data-bs-toggle="collapse" data-bs-target="#Introduction" aria-controls="Introduction" aria-expanded="false">
                        <span class="fas fa-fw fa-angle-down" aria-hidden="true"></span>
                        <span class="visually-hidden">See More</span>
                    </button>
                    <div class="app-sidebar-subnav">
                        <ul class="app-sidebar-nav-list">
                            <li class="app-sidebar-nav-item">
                                <a class="app-sidebar-nav-link " href="/introduction/considerations/">
                                    <span class="fas fa-fw fa-eye opacity-00" aria-hidden="true"></span> Important Considerations
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                ...
            </ul>
        </div>
        <div class="app-sidebar-footer">
            <a href="/sitemap" class="btn btn-link">
                <span class="fas fa-map-marked-alt" aria-hidden="true"></span> Sitemap
            </a>
            <a href="/feedback" class="btn btn-link">
                <span class="fas fa-comment" aria-hidden="true"></span> Feedback
            </a>
        </div>
    </nav>
    <div class="app-content">
        <main id="main">...</main>
        <footer>...</footer>
    </div>
</body>
```



