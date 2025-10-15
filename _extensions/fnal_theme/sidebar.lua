function Div(el)
  if el.classes:includes('reveal') then
    local sidebar = pandoc.RawBlock('html', quarto.meta.sidebar)
    el.content:insert(sidebar)
    return el
  end
end