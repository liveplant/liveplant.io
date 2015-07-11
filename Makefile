JS_SOURCES = $(shell find src/js -name "*.js")
JS_INDEX = src/js/index.js
JS_TARGET = dist/js/bundle.js
SCSS_SOURCE = $(shell find src/scss -name "*.scss")
CSS_TARGET = dist/css/bundle.css
HTML_SOURCE = $(shell find src/*.html)
HTML_TARGET = $(HTML_SOURCE:src/%=dist/%)
IMAGES_SOURCE = $(shell find src/images)
IMAGES_TARGET = $(IMAGES_SOURCE:src/images/%=dist/images/%)
NPM_BIN = $(shell npm bin)
BIFY_ARGS = -t babelify
dir_guard = @mkdir -p $(@D)

.PHONY: all clean serve watchify watch-static-files watch static-files

all: node_modules static-files $(JS_TARGET)

static-files: $(HTML_TARGET) $(IMAGES_TARGET)

dist/images/%: src/images/%
	$(dir_guard)
	cp $< $@

dist/%.html: src/%.html
	$(dir_guard)
	cp $< $@

$(JS_TARGET): $(JS_INDEX) $(JS_SOURCE)
	$(dir_guard)
	$(NPM_BIN)/browserify $< $(BIFY_ARGS) --outfile $@

$(CSS_TARGET): src/scss/main.scss $(SCSS_SOURCE)
	$(dir_guard)
	$(NPM_BIN)/node-sass $< $@
	$(NPM_BIN)/postcss --use autoprefixer $@ -o $@

serve:
	$(NPM_BIN)/browser-sync start --server dist --files "dist/css/*.css, dist/js/*.js, dist/*.html"

watchify:
	$(NPM_BIN)/watchify $(JS_INDEX) -d $(BIFY_ARGS) --outfile $(JS_TARGET) -v

watch-static-files:
	$(NPM_BIN)/chokidar 'src/**.html' 'src/images/**' -c 'make static-files'

watch-scss: 
	$(NPM_BIN)/chokidar 'src/scss/**/*.scss' -c 'make $(CSS_TARGET)'

watch: all
	make serve & make watchify & make watch-static-files & make watch-scss

clean: 
	rm -rf dist node_modules

node_modules:
	npm install

# http://blog.jgc.org/2015/04/the-one-line-you-should-add-to-every.html
print-%: ; @echo $*=$($*)
