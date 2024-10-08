Search.setIndex({"alltitles": {"About the Author": [[1, null]], "Explorations in Data Science": [[2, null]], "Finally, we can interpret the regression weights as attention over the training data points": [[3, "finally-we-can-interpret-the-regression-weights-as-attention-over-the-training-data-points"]], "How and Why does Batch Normalization Work?": [[0, null]], "Internal Covariate Shift": [[0, "internal-covariate-shift"]], "Let\u2019s define the models": [[0, "let-s-define-the-models"]], "Let\u2019s start by generating the data.": [[3, "let-s-start-by-generating-the-data"]], "Let\u2019s start by loading the MNIST dataset": [[0, "let-s-start-by-loading-the-mnist-dataset"]], "Nadaraya-Watson Regression / Kernel Regression": [[3, null]], "Now, let\u2019s run the regression on our training data": [[3, "now-let-s-run-the-regression-on-our-training-data"]], "Smoother Gradient Updates": [[0, "smoother-gradient-updates"]], "So why does batch normalization help?": [[0, "so-why-does-batch-normalization-help"]], "Testing Phase": [[0, "testing-phase"]], "Training Phase": [[0, "training-phase"]], "What is Batch Normalization?": [[0, "what-is-batch-normalization"]]}, "docnames": ["09-jax-mnist-fc-batchnorm", "about", "intro", "nadaraya-watson-kernel-regression"], "envversion": {"sphinx": 62, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9}, "filenames": ["09-jax-mnist-fc-batchnorm.ipynb", "about.md", "intro.md", "nadaraya-watson-kernel-regression.ipynb"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"0": [0, 3], "000": 0, "001": 0, "05": 0, "06": 0, "1": [0, 3], "10": [0, 3], "100": [0, 3], "11": 0, "12": 0, "128": 0, "13": 0, "14": 0, "15": 0, "16": 0, "18": [0, 3], "19": 0, "1960": 3, "2": [0, 3], "20": 0, "2022": 0, "21": 0, "22": 0, "23": 0, "24": 0, "242762": 0, "255": [0, 3], "256": 0, "28": 0, "28x28": 0, "3": 0, "31": 0, "32": 0, "34": 0, "35": 0, "4": 0, "40": 3, "42": 0, "4f": 0, "5": [0, 3], "50": 0, "52": 0, "6": 0, "60": 0, "64": 0, "65": 0, "67": 0, "69": 0, "7": 0, "70": 0, "72": 0, "73": 0, "75": 0, "77": 0, "789": 0, "79": 0, "8": 0, "9": 0, "90": 0, "999": 0, "As": [0, 3], "At": 0, "For": 3, "If": 0, "In": 0, "On": 3, "The": [0, 2, 3], "Then": 0, "_": [0, 3], "__call__": 0, "__init__": 0, "__new__": 0, "_checkcalledfromgeneratedfil": 0, "_descriptor": 0, "_messag": 0, "_pb2": 0, "absl": 0, "accuraci": 0, "across": 0, "activ": 0, "adam": 0, "add": [0, 3], "add_vertex_dot": 3, "addit": 0, "after": 0, "align": 0, "all": 0, "along": 0, "alpha": [0, 3], "also": 0, "an": [0, 1, 3], "ani": [0, 3], "anim": 0, "append": 0, "appli": 0, "apply_fn": 0, "apply_gradi": 0, "approxim": 3, "ar": [0, 3], "arang": 3, "argmax": 0, "as_supervis": 0, "assum": 3, "attentionscen": 3, "attn_weight": 3, "attribut": 0, "attributeerror": 0, "avail": 3, "averag": 3, "avoid": 0, "awai": 3, "ax": [0, 3], "axi": [0, 3], "axis_config": 3, "b": 0, "background": 0, "bad": 0, "baselin": 0, "baseline_dense0_w": 0, "baseline_dense1_w": 0, "baseline_dense2_w": 0, "baseline_dense3_w": 0, "baseline_grad": 0, "baseline_grad_mean": 0, "baseline_grad_std": 0, "baseline_grads_al": 0, "baseline_grads_histori": 0, "baseline_m1": 0, "baseline_model": 0, "baseline_o1": 0, "baseline_output": 0, "baseline_output_mean": 0, "baseline_output_std": 0, "baseline_outputs_histori": 0, "baseline_param": 0, "baseline_params_histori": 0, "baseline_s1": 0, "baseline_t": 0, "baseline_vari": 0, "batch_imag": 0, "batch_label": 0, "batch_siz": 0, "batch_stat": 0, "batch_stats_histori": 0, "batchnorm": 0, "batchnorm_": 0, "batchnorm_0": 0, "batchnorm_1": 0, "batchnorm_2": 0, "becom": 3, "been": 1, "befor": 0, "beta": 0, "better": 0, "between": [0, 3], "big": 0, "bimod": 0, "bin": 0, "black": 0, "blue": 0, "bool": 0, "both": 0, "boxcar": 3, "break": 0, "browser": 3, "buffer": 0, "c2p": 3, "call": [0, 3], "came": 0, "can": 0, "candid": 0, "candidate_batch_stat": 0, "candidate_batch_stats_histori": 0, "candidate_dense0_w": 0, "candidate_dense1_w": 0, "candidate_dense2_w": 0, "candidate_dense3_w": 0, "candidate_grad": 0, "candidate_grad_mean": 0, "candidate_grad_std": 0, "candidate_grads_al": 0, "candidate_grads_histori": 0, "candidate_m1": 0, "candidate_model": 0, "candidate_o1": 0, "candidate_output": 0, "candidate_output_mean": 0, "candidate_output_std": 0, "candidate_outputs_histori": 0, "candidate_param": 0, "candidate_params_histori": 0, "candidate_s1": 0, "candidate_t": 0, "candidate_vari": 0, "cannot": 0, "cell": 0, "center": 0, "chang": 0, "choos": 0, "class": [0, 3], "close": 0, "closer": 3, "cm": 0, "code": 0, "color": 0, "colormap": 0, "com": 0, "combin": 3, "commonli": 3, "commun": [0, 3], "compact": 0, "compar": 0, "compute_loss": 0, "config": 3, "connect": 0, "consequ": 0, "consist": [0, 2], "constant": [0, 3], "construct": 3, "contribut": 3, "control": 3, "converg": 0, "core": 0, "count": 0, "count_param": 0, "creat": 0, "curv": 3, "darkgrid": 0, "datapoint": 3, "dataset_build": 0, "dataset_info": 0, "dataset_info_generated_pb2": 0, "dataset_info_pb2": 0, "date": 0, "deep": 0, "def": [0, 3], "dens": 0, "dense_": 0, "dense_0": 0, "dense_1": 0, "dense_2": 0, "dense_3": 0, "descriptor": 0, "dev": 0, "develop": 0, "deviat": 0, "dict": 0, "differ": [0, 3], "difficult": 0, "diffus": 3, "digit": 0, "diminish": 3, "directli": 0, "disabl": 0, "discoveri": 2, "displai": 0, "distanc": 3, "distribut": 0, "div": 0, "doc": 0, "doe": 3, "dot": 3, "downgrad": 0, "dummy_input": 0, "e": 3, "each": [0, 3], "earli": [0, 1, 3], "element": 3, "employe": 1, "engin": 1, "ensur": 0, "enumer": 0, "enumvaluedescriptor": 0, "envlogger_read": 0, "epanechikov": 3, "epoch": 0, "epsilon": 0, "error": [0, 3], "especi": 0, "estim": 3, "eval_step": 0, "ex": 0, "exampl": 0, "exp": 3, "experi": [0, 3], "experienc": 1, "ey": 2, "f": [0, 3], "f1": 3, "f2": 3, "f3": 3, "f4": 3, "fairli": 3, "fals": [0, 3], "farther": 3, "faster": 0, "featur": [0, 3], "few": [0, 1], "fig": 0, "figsiz": 0, "file": 0, "final": 0, "first": 0, "flatten": 0, "flax": 0, "float32": 0, "focu": 0, "frac": [0, 3], "frame": 0, "from": [0, 3], "fulli": 0, "funcanim": 0, "function": [0, 3], "functool": 0, "g": 0, "gamma": 0, "gaussian": 3, "gener": 0, "github": 1, "given": 3, "goal": 3, "good": 3, "googl": 0, "grad": 0, "grads_histori": 0, "grayscal": 0, "green": 3, "grid": 0, "gt": 3, "h": 3, "ha": [0, 1], "handwrit": 0, "handwritten": 0, "has_aux": 0, "hat": [0, 3], "have": [0, 2, 3], "height": 3, "here": 3, "hist": 0, "histogram": 0, "how": 3, "howev": 0, "html": 0, "http": 0, "huggingface_wrapp": 0, "i": [1, 3], "idea": 3, "ident": 0, "idx": 0, "im1": 3, "im1_data": 3, "im2": 3, "im2_data": 3, "im3": 3, "im3_data": 3, "im4": 3, "im4_data": 3, "imag": 0, "imagemobject": 3, "immedi": 0, "import": [0, 3], "imshow": [0, 3], "includ": 3, "include_numb": 3, "inconsist": 0, "increas": 3, "individu": 0, "influenc": 3, "inform": 0, "init": 0, "initi": 0, "input": [0, 3], "instead": 3, "intuit": 3, "involv": 3, "ipython": 0, "iter": 0, "jax": 0, "jit": 0, "jnp": 0, "just": 0, "k": 3, "kei": 0, "kernel": 0, "label": 0, "landscap": 2, "last": 0, "layer": 0, "layer_idx": 0, "layer_nam": 0, "layer_shap": 0, "lazy_imports_util": 0, "lead": 0, "learn": [0, 3], "learnabl": 0, "learning_r": 0, "legend": [0, 3], "len": 0, "leq": 3, "less": 3, "lib": 0, "like": 0, "line": 0, "linear": 0, "linen": 0, "linkedin": 1, "logit": 0, "long": 0, "look": 0, "loss": 0, "loss_fn": 0, "lot": 0, "lower": 0, "lr": 0, "m": 3, "make": 0, "manim": 3, "math": 3, "matplotlib": [0, 3], "max": [0, 3], "mean": [0, 3], "measur": 3, "media_width": 3, "messag": 0, "method": 3, "minibatch": 0, "ml": 1, "mlp": 0, "mlpbatchnorm": 0, "mock_builtin_to_use_gfil": 0, "modifi": 0, "modul": 0, "more": [0, 3], "most": 0, "mu_": 0, "mu_b": 0, "much": [0, 3], "mul": 0, "must": 0, "mutabl": 0, "n": 3, "nadaraya_watson_regress": 3, "name": 0, "nameerror": 0, "network": 0, "neural": 0, "new": [0, 2], "next": 0, "nn": 0, "noisi": 3, "non": 3, "none": 3, "norm": 0, "norm_weight": 3, "note": 0, "notic": [0, 3], "np": 3, "num_baseline_param": 0, "num_candidate_param": 0, "num_epoch": 0, "num_exampl": 0, "num_param": 0, "num_train": 0, "number": 0, "numer": 0, "numpi": [0, 3], "o": 3, "observ": [0, 3], "one": 0, "one_hot": 0, "one_hot_label": 0, "ones": [0, 3], "onli": 0, "oper": 0, "optax": 0, "order": 0, "origin": 3, "other": 0, "our": 0, "out": 0, "output": 0, "output_idx": 0, "outputs_histori": 0, "over": 0, "p": 0, "packag": 0, "param": 0, "param_i": 0, "param_j": 0, "paramet": [0, 3], "parametr": 3, "params_histori": 0, "paramt": 0, "pars": 0, "peak": 0, "perform": 0, "permut": 0, "phi": 3, "pixel": 0, "plai": 3, "plot": [0, 3], "plot_line_graph": 3, "plt": [0, 3], "possibl": 0, "predict": [0, 3], "print": 0, "prngkei": 0, "probabl": 0, "process": 3, "produc": 3, "progress": 0, "progress_bar": 3, "proto": 0, "proto_lib": 0, "protobuf": 0, "protoc": 0, "protocol": 0, "protocol_buffers_python_implement": 0, "provid": 0, "pure": 0, "py": 0, "pylint": 0, "pyplot": [0, 3], "python": 0, "python3": 0, "qm": 3, "quit": 0, "rand": 3, "randint": 0, "randn": 3, "random": 0, "rang": 0, "rapidli": 0, "ratio": 0, "raw": 3, "raw_test_imag": 0, "raw_train_imag": 0, "real": 2, "recent": 0, "reduc": 0, "regener": 0, "regressionscen": 3, "relu": 0, "relu_0": 0, "relu_1": 0, "relu_2": 0, "remain": 0, "remov": 3, "repeat": 0, "repres": 0, "reshap": [0, 3], "result": 3, "return": [0, 3], "rld": 0, "rng": 0, "save": 0, "scalar": 3, "scale": 0, "scene": 3, "schema_pb2": 0, "seaborn": 0, "see": [0, 3], "seek": 2, "self": [0, 3], "set": 0, "set_titl": 0, "set_xlabel": 0, "set_xlim": 0, "set_xmargin": 0, "set_xtick": 0, "set_ylabel": 0, "set_ymargin": 0, "set_ytick": 0, "shape": [0, 3], "should": 3, "show": [0, 3], "sigma_b": 0, "similarli": 0, "sin": 3, "singl": [0, 3], "site": 0, "size": 0, "sleep": 0, "slower": 0, "small": 0, "smaller": 0, "smooth": 3, "softmax_cross_entropi": 0, "some": 0, "sort": 3, "sourc": 3, "split": 0, "splits_lib": 0, "spread": 0, "sqrt": 0, "stabl": 0, "standard": 0, "startup": 1, "state": 0, "statist": 0, "std": 0, "style": 0, "sub_rng": 0, "subplot": 0, "subsequ": 0, "suggest": 3, "sum": 3, "sum_i": 3, "sum_j": 3, "summari": 0, "support": 3, "surfac": 0, "t": 0, "tend": 0, "tensorflow__metadata_dot_proto_dot_v0_dot_schema__pb2": 0, "tensorflow_dataset": 0, "tensorflow_metadata": 0, "term": 3, "test_accuraci": 0, "test_imag": 0, "test_label": 0, "test_max": 0, "test_mean": 0, "test_std": 0, "test_tf": 0, "text": [0, 3], "tfd": 0, "than": 0, "thi": [0, 3], "time": 0, "titl": 0, "to_html5_video": 0, "too": 0, "torch": 3, "traceback": 0, "track": 0, "train_accuraci": 0, "train_and_evalu": 0, "train_imag": 0, "train_label": 0, "train_max": 0, "train_mean": 0, "train_stat": 0, "train_std": 0, "train_step": 0, "train_tf": 0, "trainstat": 0, "transform": [0, 3], "tree": 0, "true": [0, 3], "try": [0, 3], "two": 0, "tx": 0, "type": 0, "typeerror": 0, "uint8": 3, "underflow": 0, "understand": 0, "unnorm": 0, "updated_batch_stat": 0, "updated_vari": 0, "us": [0, 3], "use_running_averag": 0, "user": 0, "usual": [0, 3], "util": 0, "v0": [0, 3], "v0_8": 0, "valu": [0, 3], "variabl": 0, "varieti": 0, "venv": 0, "verbos": 3, "version": 0, "video": 3, "vikram": [0, 1], "vikrampawar": 0, "voyag": 2, "wai": 3, "wait": 3, "wavylin": 3, "we": 0, "weight": 0, "weights_0_1": 3, "weights_0_5": 3, "weights_1_0": 3, "weights_1_5": 3, "well": 0, "where": 0, "which": 0, "while": 3, "white": 0, "who": 1, "wise": 0, "without": 3, "workaround": 0, "written": 0, "x": [0, 3], "x_gt": 3, "x_i": 3, "x_j": 3, "x_rang": 3, "x_train": 3, "xlabel": [0, 3], "y": 3, "y_gt": 3, "y_i": 3, "y_pred": 3, "y_pred_0_1": 3, "y_pred_0_5": 3, "y_pred_1_0": 3, "y_pred_1_5": 3, "y_rang": 3, "y_train": 3, "ylabel": 3, "you": [0, 3], "your": [0, 3], "zip": 3}, "titles": ["How and Why does Batch Normalization Work?", "About the Author", "Explorations in Data Science", "Nadaraya-Watson Regression / Kernel Regression"], "titleterms": {"": [0, 3], "about": 1, "attent": 3, "author": 1, "batch": 0, "can": 3, "covari": 0, "data": [2, 3], "dataset": 0, "defin": 0, "doe": 0, "explor": 2, "final": 3, "gener": 3, "gradient": 0, "help": 0, "how": 0, "i": 0, "intern": 0, "interpret": 3, "kernel": 3, "let": [0, 3], "load": 0, "mnist": 0, "model": 0, "nadaraya": 3, "normal": 0, "now": 3, "our": 3, "over": 3, "phase": 0, "point": 3, "regress": 3, "run": 3, "scienc": 2, "shift": 0, "smoother": 0, "so": 0, "start": [0, 3], "test": 0, "train": [0, 3], "updat": 0, "watson": 3, "we": 3, "weight": 3, "what": 0, "why": 0, "work": 0}})