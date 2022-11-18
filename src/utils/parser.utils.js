const parseCSV = ( csvContent ) => {
    const lines = csvContent.split( '\n' );
    const rows = [];
    for ( const raw of lines ) {
        const cells = raw.split( '"' );
        const newCell = []
        for ( const index in cells ) {
            if ( cells[ index ] !== ',' && cells[ index ] !== '' ) {
                if ( cells[ index ] !== '""' ) {
                    newCell.push( cells[ index ].replace( '"', '' ).replace( '"', '' ) );
                }
            }
        }
        if ( newCell.length > 0 ) {
            rows.push( newCell )
        }
    }
    return rows;
}

const getColumnData = ( index, formattedCSV ) => {
    const columnData = [];
    for ( let rowIndex = 0; rowIndex < formattedCSV.length; rowIndex++ ) {
        if ( rowIndex > 0 ) {
            columnData.push( formattedCSV[ rowIndex ][ index ] );
        }
    }
    return columnData;
}

const getRawData = ( index, formattedCSV ) => {
    return formattedCSV[ index ]
}

const getCellData = ( row, col, formattedCSV ) => {
    return formattedCSV[ row ][ col ]
}
export { parseCSV, getRawData, getColumnData, getCellData };
