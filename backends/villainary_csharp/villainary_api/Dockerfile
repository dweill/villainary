FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["villainary_api/villainary_api.csproj", "villainary_api/"]
RUN dotnet restore "villainary_api/villainary_api.csproj"
COPY . .
WORKDIR "/src/villainary_api"
RUN dotnet build "villainary_api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "villainary_api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "villainary_api.dll"]
