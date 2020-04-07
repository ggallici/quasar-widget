export const setMenuItemDraggeado = ({ commit }, menuItemDraggeado) => {
    commit('SET_MENU_ITEM_DRAGGEADO', menuItemDraggeado);
}

export const refrescarItemsDeLaGrilla = ({ state }, grilla) => {
    grilla.engine.nodes.forEach(gridStackNode => {
        const gridItem = gridStackNode.el
        const storeItem = state.items.find(it => it.id === parseInt(gridItem.getAttribute("data-gs-id")));
        grilla.update(gridItem, ...Object.values(storeItem.gridItem));
    });
}

export const refrescarItemsDelStoreCon = ({ commit }, gridStackNodes) => {
    gridStackNodes.forEach(gridStackNode => {
        commit('FIND_ITEM_BY_ID_AND_SET_GRIDITEM', {
            id: parseInt(gridStackNode.el.getAttribute("data-gs-id")),
            newGridItem: {
                x: parseInt(gridStackNode.el.getAttribute("data-gs-x")),
                y: parseInt(gridStackNode.el.getAttribute("data-gs-y")),
                w: parseInt(gridStackNode.el.getAttribute("data-gs-width")),
                h: parseInt(gridStackNode.el.getAttribute("data-gs-height")),
            }
        });
    });
}

export const agregarWidgetEnLaGrilla = ({ commit }, { grilla, widget }) => {
    commit('FIND_ITEM_BY_ID_AND_SET_AGREGADO_AND_XY', { id: widget.id, celda: widget.celda });
    setTimeout(() => {
        const itemParaEliminar = document.querySelector(`[data-gs-id="${widget.id}"]`);
        const itemEliminado = grilla.el.removeChild(itemParaEliminar);
        grilla.addWidget(
            itemEliminado,
            ...Object.values(widget.celda), 
            ...Object.values(widget.tamanio));
    });
}
