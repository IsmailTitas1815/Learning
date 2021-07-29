"""
Django settings for firstproject project.

Generated by 'django-admin startproject' using Django 3.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

from django.contrib.messages import constants as messages
import os
import environ
env = environ.Env(
    # set casting, default value,  if DEBUG=True/On in .env then True otherwise False
    DEBUG=(bool, False)
)
# reading .env file
environ.Env.read_env()

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'f%dk29k%3z7c1!&1587(2gv=@-xao^ko&0s=@sg8=fembuf)8a'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['www.wondershop.in',
                 'services.wondershop.in', '127.0.0.1', 'admin.wondershop.in']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # 'django.contrib.sites',

    'firstapp',
    'seller',
    'django_hosts',

    # 'channels',

    # Gunicorn development server
    # 'dj_static',
]

# CACHES = {
#     'default': {
#         'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
#         'LOCATION': 'my_cache_table',
#     }
# }

#SESSION_ENGINE = "django.contrib.sessions.backends.signed_cookies"
#SESSION_ENGINE = "django.contrib.sessions.backends.file"
#SESSION_FILE_PATH = r"D:\Mastering Django\firstproject"
#SESSION_ENGINE = "django.contrib.sessions.backends.cache"
#SESSION_ENGINE = "django.contrib.sessions.backends.cached_db"
# SESSION_CACHE_ALIAS

MIDDLEWARE = [
    'django_hosts.middleware.HostsRequestMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # method_is_async = False
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django_hosts.middleware.HostsResponseMiddleware'
]


# AUTHENTICATION_BACKENDS = (
#     'firstapp.backends.MyAuthBackend', # our custom authentication backend
#     'django.contrib.auth.backends.ModelBackend' # fallback to default authentication backend if first fails
#     )

ROOT_URLCONF = 'firstproject.urls'
ROOT_HOSTCONF = 'firstproject.hosts'
DEFAULT_HOST = 'www'
PARENT_HOST = 'wondershop.in'
HOST_PORT = "8000"

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'firstproject.wsgi.application'

ASGI_APPLICATION = 'firstproject.asgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    },
    # 'default': {
    #     'ENGINE': 'django.db.backends.mysql',
    #     'NAME': 'TestDB',
    #     'USER': 'root',
    #     'PASSWORD': '',
    #     'HOST': '127.0.0.1',
    #     'PORT': '3306',
    # }
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/


STATIC_URL = '/static/'
# when deployemnt do collectstatic command and then in static file settings in web server(apache/nginx) mention alias as '/static' after it path of static_cdn folder or static folder as set by you
STATIC_ROOT = os.path.join(BASE_DIR, 'static_cdn')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
STATICFILES_DIRS = [
    # mention folders in saticfiles_dirs where django has to look for static files except static folder inside apps during development
    os.path.join(BASE_DIR, "static"),
]


AUTH_USER_MODEL = 'firstapp.CustomUser'


LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'index'
LOGOUT_REDIRECT_URL = 'index'

MESSAGE_TAGS = {
    # here we can override tags meaning in place of there actual color replace by another
    messages.ERROR: 'danger'
}


# SMTP SETTINGS
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_USE_TLS = True
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_HOST_USER = 'priyanshuguptacontact@gmail.com'
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = 'Testing <priyanshuguptacontact@gmail.com>'

#PASSWORD_RESET_TIMEOUT_DAYS = "7"


# PAYMENT GATEWAY SETTINGS
razorpay_id = env('RAZORPAY_ID')
razorpay_account_id = env('razorpay_account_id')