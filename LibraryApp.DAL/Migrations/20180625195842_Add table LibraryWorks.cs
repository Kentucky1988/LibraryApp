using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LibraryApp.DAL.Migrations
{
    public partial class AddtableLibraryWorks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LibraryWorkId",
                table: "Сlients",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LibraryWorkId",
                table: "Books",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "LibraryWorks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PromiseDateReturn = table.Column<DateTime>(nullable: false),
                    ActualDateReturn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LibraryWorks", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Сlients_LibraryWorkId",
                table: "Сlients",
                column: "LibraryWorkId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_LibraryWorkId",
                table: "Books",
                column: "LibraryWorkId");

            migrationBuilder.AddForeignKey(
                name: "FK_Books_LibraryWorks_LibraryWorkId",
                table: "Books",
                column: "LibraryWorkId",
                principalTable: "LibraryWorks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Сlients_LibraryWorks_LibraryWorkId",
                table: "Сlients",
                column: "LibraryWorkId",
                principalTable: "LibraryWorks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_LibraryWorks_LibraryWorkId",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_Сlients_LibraryWorks_LibraryWorkId",
                table: "Сlients");

            migrationBuilder.DropTable(
                name: "LibraryWorks");

            migrationBuilder.DropIndex(
                name: "IX_Сlients_LibraryWorkId",
                table: "Сlients");

            migrationBuilder.DropIndex(
                name: "IX_Books_LibraryWorkId",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "LibraryWorkId",
                table: "Сlients");

            migrationBuilder.DropColumn(
                name: "LibraryWorkId",
                table: "Books");
        }
    }
}
