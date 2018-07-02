using System.Collections.Generic;
using System.Data;
using System.IO;

namespace LibraryApp.BLL.Interfaces
{
    public interface IConverter
    {
        DataSet ListToDataSet<T>(IList<T> list);
        MemoryStream DataSetToStreamExcel(DataSet dataSet);
    }
}
