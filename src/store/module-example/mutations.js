export const SET_MENU_ITEM_DRAGGEADO = (state, menuItemDraggeado) => {
    state.menuItemDraggeado = menuItemDraggeado;
}

export const FIND_ITEM_BY_ID_AND_SET_GRIDITEM = (state, { id, newGridItem }) => {
    state.items.find(it => it.id === id).gridItem = newGridItem;
}

export const FIND_ITEM_BY_ID_AND_SET_AGREGADO_AND_XY = (state, { id, celda }) => {
    const item = state.items.find(it => it.id === id);
    item.agregado = true;
    item.gridItem = { ...celda, ...item.gridItem };
}
