import { RowID, RowElement } from './interface';
import * as CRUD from './task_3/js/crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

