FROM php:8.3-fpm

# Dépendances système pour Laravel et le traitement d'images (GD)
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev zip unzip libjpeg-dev libfreetype6-dev

# Nettoyage et installation des extensions PHP
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/back
USER www-data

EXPOSE 9000
CMD ["php-fpm"]