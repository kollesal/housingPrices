cnxn_str = ("Driver={SQL Server Native Client 11.0};"
            "Server=USXXX00345,67800;"
            "Database=DB02;"
            "Trusted_Connection=yes;")
cnxn = pyodbc.connect(cnxn_str)