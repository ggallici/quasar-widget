export const setMenuItemDraggeado = ({ commit }, menuItemDraggeado) => {
    commit('SET_MENU_ITEM_DRAGGEADO', menuItemDraggeado);
}

export const refrescarItemsDeLaGrilla = ({ state }, grilla) => {
    grilla.engine.nodes.forEach(gridStackNode => {
        const gridItem = gridStackNode.el
        const storeItem = state.items.find(it => it.id == gridItem.getAttribute("data-gs-id"));
        grilla.update(gridItem, ...Object.values(storeItem.gridItem));
    });
}

export const refrescarItemsDelStoreCon = ({ commit }, gridStackNodes) => {
    gridStackNodes.forEach(gridStackNode => {
        commit('FIND_BY_ID_AND_UPDATE_GRID_ITEM', {
            id: gridStackNode.el.getAttribute("data-gs-id"),
            newGridItem: {
                x: parseInt(gridStackNode.el.getAttribute("data-gs-x")),
                y: parseInt(gridStackNode.el.getAttribute("data-gs-y")),
                w: parseInt(gridStackNode.el.getAttribute("data-gs-width")),
                h: parseInt(gridStackNode.el.getAttribute("data-gs-height")),
            }
        });
    });
}
