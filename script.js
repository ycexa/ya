// Возвращает массив элементов нода для добавления в массив
function ctr(ob) {
    var child = document.createElement('div');
    if (typeof ob.class === "string")
    {
        child.className = ob.class
    }
    if (typeof ob.val === "string")
    {
        child.innerHTML = ob.val
    }
    else if (typeof ob.val === "object")
    {
        for (var i in ob.val)
        {
            var c = ctr(ob.val[i]);
            if (c)
            {
                child.appendChild(c);
            }
        }
    }
    return child;
}
