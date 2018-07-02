using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LibraryApp.DAL.Migrations
{
    public partial class Update2tableLibraryWorks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "ActualDateReturn",
                table: "LibraryWorks",
                nullable: true,
                oldClrType: typeof(DateTime));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "ActualDateReturn",
                table: "LibraryWorks",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
