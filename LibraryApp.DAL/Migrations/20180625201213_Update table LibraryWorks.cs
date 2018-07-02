using Microsoft.EntityFrameworkCore.Migrations;

namespace LibraryApp.DAL.Migrations
{
    public partial class UpdatetableLibraryWorks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_LibraryWorks_LibraryWorkId",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_Сlients_LibraryWorks_LibraryWorkId",
                table: "Сlients");

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

            migrationBuilder.AddColumn<int>(
                name: "BookId",
                table: "LibraryWorks",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ClientId",
                table: "LibraryWorks",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_LibraryWorks_BookId",
                table: "LibraryWorks",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_LibraryWorks_ClientId",
                table: "LibraryWorks",
                column: "ClientId");

            migrationBuilder.AddForeignKey(
                name: "FK_LibraryWorks_Books_BookId",
                table: "LibraryWorks",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LibraryWorks_Сlients_ClientId",
                table: "LibraryWorks",
                column: "ClientId",
                principalTable: "Сlients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LibraryWorks_Books_BookId",
                table: "LibraryWorks");

            migrationBuilder.DropForeignKey(
                name: "FK_LibraryWorks_Сlients_ClientId",
                table: "LibraryWorks");

            migrationBuilder.DropIndex(
                name: "IX_LibraryWorks_BookId",
                table: "LibraryWorks");

            migrationBuilder.DropIndex(
                name: "IX_LibraryWorks_ClientId",
                table: "LibraryWorks");

            migrationBuilder.DropColumn(
                name: "BookId",
                table: "LibraryWorks");

            migrationBuilder.DropColumn(
                name: "ClientId",
                table: "LibraryWorks");

            migrationBuilder.AddColumn<int>(
                name: "LibraryWorkId",
                table: "Сlients",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LibraryWorkId",
                table: "Books",
                nullable: true);

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
    }
}
