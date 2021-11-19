const root = document.getElementById("container-middle");
articles.forEach(article => {
    const wrapper = document.createElement("div");
    wrapper.className = "eventframe";
    const image = document.createElement("img");
    image.className = "eventpicture";
    image.src = article.url;
    image.alt = article.name;
    const contentName = document.createElement("p");
    contentName.innerHTML = article.name;
    const contentDate = document.createElement("p");
    contentDate.innerHTML = article.date;
    const contentCategory = document.createElement("p");
    contentCategory.innerHTML = article.category;
    const contentHidden = document.createElement("p");
    contentHidden.id = article.ptagid;
    const contentPtag = document.createElement("p");
    const contentLink = document.createElement("a");
    contentLink.innerHTML = "Link:"
    contentLink.href = article.link;
    contentPtag.append(contentLink);
    const contentButton = document.createElement("button");
    contentButton.id = article.btnId;
    contentButton.className = "btn";
    contentButton.innerHTML = "More Info";
    wrapper.append(image);
    wrapper.append(contentName);
    wrapper.append(contentDate);
    wrapper.append(contentCategory);
    wrapper.append(contentHidden);
    wrapper.append(contentPtag);
    wrapper.append(contentButton);
    root.append(wrapper);
})