using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using LibraryApp.DAL.EF;
using LibraryApp.DAL.Interfaces;
using LibraryApp.DAL.Repositories;
using LibraryApp.Automapper;
using LibraryApp.BLL.Interfaces;
using LibraryApp.BLL.Services;
using Microsoft.AspNetCore.Routing;
using LibraryApp.BLL.Automapper;

namespace WebApplication15
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb;Database=LibraryDB;Trusted_Connection=True;";
            services.AddDbContext<LibreryContext>(options => options.UseSqlServer(connectionString));
          
            services.AddMvc();
                       
            services.AddTransient<IUnitOfWork, EFUnitOfWork>();
            services.AddTransient<ILibraryServices, LibraryServices>();
            services.AddTransient<IConverter, Converter>();

            var config = new AutoMapper.MapperConfiguration(cfg => {
                cfg.AddProfile(new AutomapperProfile());
                cfg.AddProfile(new AutomapperProfileBLL());
            });
            var mapper = config.CreateMapper();
            services.AddSingleton(mapper);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}